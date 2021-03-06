import React, { useState, useEffect } from "react";
import NoFormView from "./no-form-view";
import FormControl from "./form-control";

const FormBuilderMainView = function({ formData, name, changeName, dispatch, onSubmit }) {
  const hasFormData = !!(formData && formData.length);
  const [disabled, setDisabled] = useState(true);

  const checkValidity = () =>
    setDisabled(!document.forms[name].checkValidity());

  const submitForm = function(e) {
    if (name) {
      const result = Array.from(document.forms[name].elements).reduce(
        (acc, e) => ({ ...acc, [e.name]: e.value }),
        {}
      );
      console.log(result);
      onSubmit({formName: name, fields: result})
    }
  };

  return (
    <div className="panel panel-primary form-panel">
      <div className="panel-header">
        <span className="form-title">
          {name || "Default Form"}
          &nbsp;
          <i className="fa fa-pencil" title="click to edit form name" onClick={()=>changeName()} />
        </span>
        <a
          className="add-control-link pull-right clickable"
          data-toggle="modal"
          title="click to add new form field"
          data-target="#fc_modal"
        >
          <i className="fa fa-plus"/>
          Add Control
        </a>
      </div>
      <div className={`panel-body ${!hasFormData && "flex-center"}`}>
        {hasFormData ? (
          <form
            name={name}
            onChange={(e) => checkValidity(e)}
            onSubmit={(e) => e.preventDefault()}
          >
            {formData.map((c, i) => (
              <FormControl
                {...c}
                key={`control-${i}`}
                validator={checkValidity}
                dispatch={dispatch}
              />
            ))}
          </form>
        ) : (
          <NoFormView />
        )}
      </div>
      <div className="panel-footer text-right">
        <button
          onClick={() => submitForm()}
          className="btn btn-success"
          title="click to save the form data"
          disabled={disabled}
          type="button"
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default FormBuilderMainView;
