import React from 'react';
import {StyledButton} from '../styledLogin';
import renderer from 'react-test-renderer';

it('Must be check if is a valid login', () => {
    const loginAction = renderer
      .create(<StyledButton onClick={() => {
       localStorage.getItem('token') !== null && history.push("/search")
      }}>Test</StyledButton>)
      .toJSON();

      expect(loginAction).toMatchSnapshot();
})