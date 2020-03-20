import React from 'react';
import _ from 'lodash';

import {htmlToReact, markdownify} from '../utils';

export default class SectionCalendar extends React.Component {
    render() {
      let section = _.get(this.props, 'section');

      /*
        Check Google calendar options to adjust
        Use %23 instead of # for color
      */

      const calendarOptions = {
        weekStart: '2',
        showTitle: false,
        bgColor: '%23FFFFFF',
        color: '%23F4511E',
        calendarSrc: 'buidtelberg.be_i9hmmqncntaa8lq15k35htnltg%40group.calendar.google.com',
        timeZone: 'Europe%2FBrussels',
        showTimeZone: false,
        borderStyle: '0'
      };

      const src = `
          https://www.google.com/calendar/embed?height=600&amp;wkst=${calendarOptions.weekStart}&amp;showTitle=${calendarOptions.showTitle}&amp;bgcolor=${calendarOptions.bgColor}&amp;color=${calendarOptions.color}&amp;src=${calendarOptions.calendarSrc}&amp;ctz=${calendarOptions.timeZone}&amp;showTz=${calendarOptions.showTimeZone}
        `;

      const iframe = `
        <iframe 
          src=${src}
          style='border: ${calendarOptions.borderStyle}'
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
              <Iframe iframe={iframe} class={"calendar"} />
            </section>
        );
    }
}

function Iframe(props) {
  return (<div className={props.class?props.class:""} dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}
