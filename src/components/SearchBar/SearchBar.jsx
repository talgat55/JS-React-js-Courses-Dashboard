import React from 'react';
import {Field, reduxForm} from 'redux-form'
import styled from "styled-components";
import {minValue} from "../Form/Validation/Validation";
const SearchBar = (props) => {
    const {handleSubmit, pristine,  submitting} = props;

    return (
        <SearchBarComponent className="search-form" onSubmit={handleSubmit}>

            <Field
                name="q"
                component="input"
                type="text"
                placeholder="Search"
                validate={minValue(3)}
            />
            <button
                disabled={pristine || submitting}
                type="submit">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.2861 3.3403C11.1564 0.210621 6.06262 0.210621 2.93294 3.3403C-0.19607 6.47067 -0.19607 11.5638 2.93294 14.6941C5.72 17.4805 10.0607 17.779 13.1884 15.6033C13.2542 15.9147 13.4048 16.2118 13.647 16.454L18.2048 21.0119C18.869 21.6747 19.9423 21.6747 20.6031 21.0119C21.2667 20.3483 21.2667 19.275 20.6031 18.6135L16.0453 14.0544C15.8045 13.8142 15.5066 13.6629 15.1952 13.5971C17.3724 10.4688 17.0738 6.12873 14.2861 3.3403ZM12.8471 13.2552C10.5105 15.5917 6.70782 15.5917 4.37192 13.2552C2.0367 10.9186 2.0367 7.11655 4.37192 4.77997C6.70782 2.44407 10.5105 2.44407 12.8471 4.77997C15.1837 7.11655 15.1837 10.9186 12.8471 13.2552Z" fill="black"/>
                </svg>
            </button>
        </SearchBarComponent>
    );
}
const SearchBarComponent = styled.form`
  &.search-form{
    display: flex;
    background: #F5F5F7;
    border-radius: 8px;
    padding: 5px;
    button{
      border: none;
      background: transparent;
    }
    input{
      border: none;
      background: transparent;
    }
  }
`;
export default  reduxForm({
    // a unique name for the form
    form: 'search'
})(SearchBar) ;