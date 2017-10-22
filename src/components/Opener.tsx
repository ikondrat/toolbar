import * as React from 'react';
import { Component } from 'react';
import { 
  AutoComplete
} from 'material-ui';
import Layout from './Layout';

interface Company {
  text: string;
  value: string;
}

const style = {height: 50},
      styleSearch = {
        height: 500
      };
/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
export default class Opener extends Component {
  state = {
    hasValue: false,
    companies: []
  };

  /**
   * Restores values from local store
   */
  restoreCompanies = () => {
    if (chrome && chrome.storage) {
      chrome.storage.sync.get(
      {
        companies: []
      }, 
      items => {
        this.setState({
          companies: items.companies
        });
      }
    );
    }
  }
  
  componentDidMount() {
    this.restoreCompanies();
  }

  handleUpdateInput = (value: string) => {
    
    this.setState({
      hasValue: value.length > 0,
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
      <Layout>
        <AutoComplete
          hintText="Select company"
          dataSource={this.state.companies}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleSelection}
          floatingLabelText="Select company by name"
          fullWidth={true}
          style={this.state.hasValue ? styleSearch : style}
        />
      </Layout>
    );
  }
}