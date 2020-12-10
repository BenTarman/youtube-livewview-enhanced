/* eslint-disable import/no-extraneous-dependencies */

// TODO: replace this package once official enzyme is updated for react version 17.
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure } from 'enzyme'

configure({ adapter: new Adapter() })
