/**
 * @vitest-environment jsdom
 */

import * as Dialog from '@radix-ui/react-dialog'
import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { NewSubjectModal } from './index'

describe('NewSubjectModal component', () => {
  it('renders correctly', () => {
    render(
      <Dialog.Root defaultOpen={true}>
        <NewSubjectModal />
      </Dialog.Root>,
    )

    expect(screen.getByText('New Subject')).toBeInTheDocument()
    expect(screen.getByText('Save')).toBeInTheDocument()
  })
})
