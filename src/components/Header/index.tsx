import * as Dialog from '@radix-ui/react-dialog'
import { NewSubjectModal } from '../NewSubjectModal'

import { HeaderContainer, HeaderContent, NewSubjectButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <span>Simple Search</span>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewSubjectButton type="button">New Subject</NewSubjectButton>
          </Dialog.Trigger>

          <NewSubjectModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
