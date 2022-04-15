import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux";

const UserContainer = (props) => {
  const { loading, user, error } = props;
  useEffect(() => {
    props.fetchUsers();
  }, []);

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  if (error) {
    return <h3 style={{ textAlign: "center" }}>{error}</h3>;
  }
  return (
    <div>
      <h2>User List</h2>
      {user && user.map((u) => <p key={u.id}>{u.name}</p>)}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    loading: state.user.loading,
    error: state.user.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
