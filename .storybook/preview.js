import { addDecorator } from '@storybook/react'
import Theme from '../src/Theme'

addDecorator(story => <Theme>{story()}</Theme>)
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
