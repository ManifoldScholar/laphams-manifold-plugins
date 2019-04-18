import React, { Component } from "react";
import "./styles.scss";
import thumbnail from "../../../assets/dhdebates_cover_thumb.jpg"
import Utility from "global/components/utility";

export default class PreFooter extends Component {
  render() {
    const iconClass= "action-callout-list__button-icon"
    return (
      <section className="custom-prefooter ">
        <div className="container custom-prefooter__flex-container">
          <figure className="custom-prefooter__figure">
            <img className="custom-prefooter__thumbnail" alt="" src={thumbnail} />
          </figure>
          <div className="">
            <a className="custom-prefooter__header-link" href="">
              <h4 className="custom-prefooter__heading heading-primary">Alien Reading: Text Mining, Language Standardization, and the Humanities</h4>
            </a>
            <div className="">
              <p className="custom-prefooter__body-text">Jeffrey M. Binder argues that, when applied to the study of literary and cultural texts, statistical text-mining methods tend to reinforce conceptions of language and meaning that are, at best, overly dependent on the “literal” definitions of words and, at worst, complicit in the marginalization of nonstandard linguistic conventions and modes of expression.</p>
              <div className="action-callout-list action-callout-list--inline custom-prefooter__button-container">
                <a className="action-callout-list__button--primary action-callout-list__button" href="">
                  <Utility.IconComposer icon="glasses64" size={46} iconClass={iconClass} />
                  <span className="action-callout-list__button-text">Read this Chapter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
