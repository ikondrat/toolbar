/* eslint-env chrome */
import * as React from 'react';
import { Component } from 'react';
import Layout from './Layout';
import { List, ListItem } from 'material-ui/List';
import {
  TextField,
  IconButton
} from 'material-ui';
import IconDelete from 'material-ui/svg-icons/action/delete';
import IconDone from 'material-ui/svg-icons/action/done';

interface Company {
  text: string;
  value: string;
}

export default class OptionsPage extends Component {
  state = {
    newCompanyName: null,
    newCompanyUrl: null,
    companies: []
  };

  componentDidMount() {
    this.restoreCompanies();
  }
  
  saveCompanies = (companies: Array<Company>) => {
    if (chrome && chrome.storage) {
      chrome.storage.sync.set(
        {
          companies: companies
        });
    }
  }

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

  handleInsertItem = () => {
    let companies = this.state.companies,
        cName = this.state.newCompanyName,
        cValue = this.state.newCompanyUrl;

    if (cName && cValue) {
      companies.push({
        text: cName,
        value: cValue
      } as Company);
  
      this.setState({
        companies: companies
      });

      this.saveCompanies(
        this.state.companies
      );
    }
  }

  insertCompanyName = (event: object, newValue: string) => {
    this.setState({
      newCompanyName: newValue
    });
  }

  insertCompanyUrl = (event: object, url: string) => {
    this.setState({
      newCompanyUrl: url
    });
  }

  deleteCompany = (index: number) => {
    let companies = this.state.companies;
    companies.splice(index, 1);
    this.setState({
      companies: companies
    });
  }

  render() {
    return (
      <Layout>
        <List>
          <ListItem>
            <TextField
              hintText="Type new company name"
              onChange={this.insertCompanyName}
            />
            <TextField
              hintText="Type new company URL"
              onChange={this.insertCompanyUrl}
            />
            <IconButton tooltip="done" onClick={this.handleInsertItem}>
              <IconDone />
            </IconButton>
          </ListItem>
        {this.state.companies.map((company: Company, index: number) => (
          <ListItem 
            key={index} 
            primaryText={company.text} 
            rightIcon={<IconDelete onClick={() => this.deleteCompany(index)}/>} 
          />
        ))}
        </List>
      </Layout>
    );
  }
}