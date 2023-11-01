import React from "react";
const spinner = () => {
    return (
        <div class="d-flex align-items-center">
        <strong role="status">Loading...</strong>
        <div class="spinner-border ms-auto" aria-hidden="true"></div>
      </div>
    )
}

export default spinner