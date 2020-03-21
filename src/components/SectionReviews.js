import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix} from '../utils';

export default class SectionReviews extends React.Component {
    constructor(props) {
      super();
      this.state = {
        isOpened: false,
        selectedReview: null,
      };
      this.toggleBox = this.toggleBox.bind(this);

    }

    toggleBox(review) {
      this.setState(oldState => ({ isOpened: !oldState.isOpened, selectedReview: review }));
      console.log(this.state.selectedReview);
    }

    render() {
        const { isOpened, selectedReview } = this.state;
        return (
            <section id={_.get(this.props, 'section.section_id')} className={'block reviews-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
              <div className="block-header inner-small">
                {_.get(this.props, 'section.title') && 
                <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
                }
                {_.get(this.props, 'section.subtitle') && 
                <p className="block-subtitle">
                  {htmlToReact(_.get(this.props, 'section.subtitle'))}
                </p>
                }
              </div>
              {_.get(this.props, 'section.reviews') && 
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(this.props, 'section.reviews'), (review, review_idx) => (
                  <blockquote key={review_idx} className="cell review">
                    <div className="review-inside">
                      <p className="review-text">{htmlToReact(_.get(review, 'short'))}</p>
                      <footer className="review-footer">
                        {_.get(review, 'avatar') && 
                        <img className="review-avatar" src={safePrefix(_.get(review, 'avatar'))} alt="Author avatar"/>
                        }
                        <cite className="review-author">{_.get(review, 'author')}</cite>
                      </footer>
                      { _.get(review, 'content') && (
                        <button className={'review-read-more'} onClick={(e) => {
                          this.setState(oldState => ({ isOpened: !oldState.isOpened, selectedReview: review }))}
                        }
                        >Lees meer</button>
                      )}
                    </div>
                  </blockquote>
                  ))}
                </div>

                {isOpened && selectedReview && (
                  <div className={'modal'} onClick={(e) => {
                    this.setState(oldState => ({isOpened: !oldState}))
                  }}>
                    <div className="review-content inner-small" onClick={(e) => e.stopPropagation()}>
                      <p className="review-text">{htmlToReact(_.get(selectedReview, 'content'))}</p>
                    </div>

                  </div>
                )}

              </div>
              }

            </section>
        );
    }
}
