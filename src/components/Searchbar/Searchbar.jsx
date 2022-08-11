import { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';
import {
  Header,
  Form,
  SearchFormButton,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = { query: '' };

  handleInputChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      return;
    }

    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <GoSearch size="25" />
            <ButtonLabel>Search</ButtonLabel>
          </SearchFormButton>

          <Input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.query}
          />
        </Form>
      </Header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = { onSubmit: PropTypes.func.isRequired };
