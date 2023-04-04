import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { SubjectsContext } from '../../contexts/SubjectsContext'

import { CloseButton, Content, Overlay } from './styles'

const newSubjectFormSchema = z.object({
  name: z.string(),
  code: z.string(),
  description: z.string(),
})

type NewSubjectFormInputs = z.infer<typeof newSubjectFormSchema>

export function NewSubjectModal() {
  const { createSubject } = useContext(SubjectsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewSubjectFormInputs>({
    resolver: zodResolver(newSubjectFormSchema),
  })

  async function handleCreateNewSubject(data: NewSubjectFormInputs) {
    const { name, code, description } = data

    await createSubject({
      description,
      name,
      code,
    })

    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New Subject</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewSubject)}>
          <input
            type="text"
            placeholder="Name"
            required
            {...register('name')}
          />
          <input
            type="text"
            placeholder="Code"
            required
            {...register('code')}
          />
          <input
            type="text"
            placeholder="Description"
            {...register('description')}
          />

          <button type="submit" disabled={isSubmitting}>
            Save
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
