import React from 'react';

import LoadUmd from '../src';

const SAMPLE_PROPS = {
  json: [{
    task: "Learn React",
    done: true
  }, {
    task:"Share XP",
    done: false
  }, {
    task:"Write Book",
    done: false
  }, {
    task:"Have fun",
    done: true
  }, {
    task:"Profit",
    done: false
  }]
};

class Demo extends React.Component {
  render() {
    return (<div style={ { textAlign:'center', margin: '0 auto' } }>
              <h3>async loading of react-json-viewer component demo</h3>
              <center>
                <LoadUmd url="https://npmcdn.com/react-json-viewer@1.0.9" name="ReactJSONViewer" props={ SAMPLE_PROPS }>
                    <div>Loading remote component...</div>
                </LoadUmd>
              </center>
            </div>)
  }
}

export default Demo
