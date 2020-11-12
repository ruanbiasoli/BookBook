import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
// import { useDispatch } from 'react-redux';
import validLogin from '../validLogin'
import addedBook from '../addedBook';
import fixedInfo from '../fixedInfo';
import timelineBooks from '../timelineBooks';
import volumeInfo from '../volumeInfo';

describe('snapshot', () => {
    it('valid login test - must be a function', () => {
        const testAction = renderer
        .create(<button onClick={validLogin}>test</button>)

          expect(testAction).toMatchSnapshot();
    })

    it('addedBook test - must be a function', () => {
        const addedBookTest = renderer
        .create(<button onClick={addedBook}>test</button>)

          expect(addedBookTest).toMatchSnapshot();
    })

    it('fixedInfo test - must be a function', () => {
        const testAction = renderer
        .create(<button onClick={fixedInfo}>test</button>)

          expect(testAction).toMatchSnapshot();
    })

    it('timelineBooks test - must be a function', () => {
        const testAction = renderer
        .create(<button onClick={timelineBooks}>test</button>)

          expect(testAction).toMatchSnapshot();
    })

    it('volumeInfo test - must be a function', () => {
        const testAction = renderer
        .create(<button onClick={volumeInfo}>test</button>)

          expect(testAction).toMatchSnapshot();
    })
})

