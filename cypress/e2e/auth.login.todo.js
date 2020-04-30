// Normally you shouldn't need to break your tests up this much.
// Normally I'd just have a file called `auth` and have all my tests
// in that file. But I've split them up like this to make the workshop
// flow nicer with the demo and exercises.
// eslint-disable-next-line
import {generate} from '../utils'

describe('authentication', () => {

  let user
  beforeEach(() => { 
    return cy
      .logout()
         // you'll want to first create a new user.
      .createNewUser()
      .then(u => (user = u))
          //visit the app: visit
      .visit('/')
  })

  it('should allow existing users to login', () => {
    cy
     // 2. Click the login link
      .getByText('Login').click()
          // 3. type the user's username in the username field
      .getByLabelText('username').type(user.username)
        // 4. type the user's password in the password field
      .getByLabelText('password').type(user.password)
          // 5. submit the form by clicking the submit button
      .getByText('submit').click()
    // Finally assert the route changed to '/'
      .assertRoute('/')
    cy.getByTestId('username-display').should('contain', user.username)
    // and verify that the display name contains user.username
  })

  //////// Elaboration & Feedback /////////
  // When you've finished with the exercises:
  // 1. Copy the URL below into your browser and fill out the form
  // 2. remove the `.skip` from the test below
  // 3. Change submitted from `false` to `true`
  // 4. And you're all done!
  /*
  http://ws.kcd.im/?ws=Testing&e=e2e%20register&em=
  */
  it.skip('I submitted my elaboration and feedback', () => {
    const submitted = false // change this when you've submitted!
    expect(submitted).toBe(true)
  })
  ////////////////////////////////
})
