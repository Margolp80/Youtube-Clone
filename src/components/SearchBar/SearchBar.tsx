import React from "react";
import { Input, Container } from "semantic-ui-react";
import { Props } from "./searchBar.Props";
import { searchBarState } from "./searchBar.state";

class SearchBar extends React.Component<Props> {
  state: searchBarState = { searchTerm: "" };

  onFormSubmit = (event: any): void => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div style={{ width: "40%", marginLeft: "330px", marginTop: "0" }}>
        <form onSubmit={this.onFormSubmit}>
          <Container>
            <Input
              icon="search"
              value={this.state.searchTerm}
              focus
              type="text"
              fluid
              placeholder="Search for video's.."
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            />
          </Container>
        </form>
      </div>
    );
  }
}

export default SearchBar;
