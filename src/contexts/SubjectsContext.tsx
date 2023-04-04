import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Subject {
  id: string
  code: string
  name: string
  description?: string
  created_at: string
}

interface CreateSubjectInput {
  code: string
  name: string
  description?: string
}

interface SubjectContextType {
  subjects: Subject[]
  fetchSubjects: (query?: string) => Promise<void>
  createSubject: (data: CreateSubjectInput) => Promise<void>
}

interface SubjectsProviderProps {
  children: ReactNode
}

export const SubjectsContext = createContext({} as SubjectContextType)

export function SubjectsProvider({ children }: SubjectsProviderProps) {
  const [subjects, setSubjects] = useState<Subject[]>([])

  async function fetchSubjects(query?: string) {
    const response = await api.get('subjects/search', {
      params: {
        q: query,
      },
    })

    const { subjects } = response.data

    setSubjects(subjects)
  }

  async function createSubject(data: CreateSubjectInput) {
    const { name, code, description } = data

    const response = await api.post('subjects', {
      name,
      code,
      description,
      createdAt: new Date(),
    })

    const { subject } = response.data

    setSubjects((state) => [subject, ...state])
  }

  useEffect(() => {
    fetchSubjects()
  }, [])

  return (
    <SubjectsContext.Provider
      value={{
        subjects,
        fetchSubjects,
        createSubject,
      }}
    >
      {children}
    </SubjectsContext.Provider>
  )
}
