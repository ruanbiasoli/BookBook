import React from "react";
import { ActionButton } from "../../../styled/search-page";
import renderer from "react-test-renderer";
import { useDispatch } from "react-redux";
import { shallow } from "enzyme";

describe("Snapshot", () => {
  it("Send a book to wish a read - Must be button", () => {
    const buttonAction = renderer
      .create(
        <ActionButton
          onClick={() => {
            const dispatch = useDispatch();
            dispatch(
              postBook(
                {
                  title: "Saint Seiya: Saintia Sho Vol. 1",
                  author: ["Masami Kurumada", "Chimaki Kuori"],
                  shelf: 1,
                  image_url:
                    "http://books.google.com/books/content?id=w6xuDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                  categories: "Fiction",
                  google_book_id: "w6xuDwAAQBAJ",
                },
                JSON.parse(localStorage.getItem("user"))
              )
            );
          }}
        >
          Test
        </ActionButton>
      )
      .toJSON();

    expect(buttonAction).toMatchSnapshot();
  });
});

describe("events", () => {
  it("simulate onclick", () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(
      <ActionButton onClick={onClickSpy}>Test</ActionButton>
    );
    wrapper.simulate("click");
    expect(onClickSpy).toHaveBeenCalled();
  });
});
