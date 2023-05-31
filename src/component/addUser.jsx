import React from "react";

import styled from "styled-components";
import { fakedata } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser ,deleteuser,removeuser} from "../store/slice/userSlice";

import { MdDeleteForever } from "react-icons/md"

const UserDetails = () => {
    const dispatch = useDispatch();
    const onSubbmit = (perm) => {
        console.log(perm)
        dispatch(addUser(perm))
    }
    const data = useSelector((state) => {
        return state.users;
    })
    const handleDelete = (id) => {
        dispatch(removeuser(id))
    }
    const clearUser = () => {
        dispatch(deleteuser())
    }
    return (
        <Wrapper>
            <div className="content">
                <div className="admin-table">
                    <div className="admin-subtitle">List of User Details</div>
                    <button className="btn add-btn" onClick={() => onSubbmit(fakedata())}>Add New Users</button>
                </div>
                <ul>
                    {data?.map((item, id) => <li key={id}>{item} <button className="ssdelete-btn" onClick={(e) => handleDelete(id)}><MdDeleteForever className="delete-icon" /></button></li>)}

                </ul>
                <hr />
                <div className="admin-table"><button className="btn delete-btn" onClick={() => clearUser()}>DeleteAllUser</button></div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;