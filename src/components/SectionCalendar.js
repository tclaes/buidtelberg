import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class SectionCalendar extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} className={'block contact-block bg-' + _.get(section, 'bg') + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title') && 
                <h2 className="block-title">{_.get(section, 'title')}</h2>
                }
                {_.get(section, 'subtitle') && 
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle'))}
                </p>
                }
              </div>
              <div className="block-content inner-medium">
                {markdownify(_.get(section, 'content'))}
                <iframe 
                  src="https://calendar.google.com/calendar/embed?src=5op1v9uflltl3b1ka3v3b8he9s%40group.calendar.google.com&ctz=Europe%2FAndorra" 
                  style="border: 0" 
                  width="800" 
                  height="600" 
                  frameborder="0" 
                  scrolling="no">
                </iframe>
              </div>
            </section>
        );
    }
}