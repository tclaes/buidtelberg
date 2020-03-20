import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class SectionCalendar extends React.Component {
    render() {
        let section = _.get(this.props, 'section');

        const iframe = `
            <iframe 
               src="https://www.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=buidtelberg.be_i9hmmqncntaa8lq15k35htnltg%40group.calendar.google.com&amp;color=%23F4511E&amp;ctz=Europe%2FBrussels"
              style="border: 0"
              width="800" 
              height="600" 
            >                  
            </iframe>`

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
              </div>
              <Iframe iframe={iframe} />
            </section>
        );
    }
}

function Iframe(props) {
  return (<div class="calendar" dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
