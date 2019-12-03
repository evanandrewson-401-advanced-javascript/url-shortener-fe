import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LinkItem from './LinkItem';
import PropTypes from 'prop-types';
import { getLinks } from '../../selectors/linksSelectors';
import { linksActionCreator } from '../../actions/linkActions';

const LinkList = ({ links, updateLinks }) => {
  useEffect(() => {
    updateLinks();
  }, []);

  // eslint-disable-next-line react/prop-types
  const elements = links.map(link => <LinkItem key={link._id} link={link} />);

  return (
    <section>
      {elements}
    </section>
  );
};

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    _id: String.isRequired,
    original_url: String.isRequired,
    code: String.isRequired
  })).isRequired,
  updateLinks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  links: getLinks(state)
});

const mapDispatchToProps = dispatch => ({
  updateLinks() {
    dispatch(linksActionCreator());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkList);
