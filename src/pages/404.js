import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div class="mainbox">
      <div class="err">4</div>
      <i class="far fa-question-circle fa-spin"></i>
      <div class="err2">4</div>
      <div class="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go
          <Link to="/">
            <h5>Regresar</h5>
          </Link>
          and try from there.
        </p>
      </div>
    </div>
  </>
)

export default NotFoundPage
