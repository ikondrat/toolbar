import * as React from 'react';
import { Component } from 'react';
import { 
  AutoComplete
} from 'material-ui';

import styled from 'styled-components';

const Opener = styled.div`
  min-width: 300px;
  min-height: 300px;
`;

interface Company {
  text: string;
  value: string;
}

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class AutoCompleteExampleSimple extends Component {
  state = {
    dataSource: [],
    companies: [
      {
        text: 'fti staging',
        value: 'https://www.google.com'
      }
    ]
  };

  handleUpdateInput = (value: string) => {
    // chrome.storage.local
    // console.log('log: ', chrome.storage.local.get('hello'));
    this.setState({
      dataSource: this.state.companies,
      dataSourceConfig: { 
        text: 'text',
        value: 'value'
      }
    });
  }

  handleSelection = (selectedCompany: Company) => {
      if (typeof chrome !== 'undefined' && chrome.tabs) {
        chrome.tabs.create({ url: selectedCompany.value });
      } else {
        window.location.href = selectedCompany.value; 
      }
  }

  render() {
    return (
      <Opener>
        <AutoComplete
          hintText="Select company"
          dataSource={this.state.dataSource}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleSelection}
          floatingLabelText="Full width"
          fullWidth={true}
        />
      </Opener>
    );
  }
}