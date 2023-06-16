import "./userList.css";
import {DataGrid} from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getUsers} from "../../redux/apiCalls";

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    {field: "id", headerName: "ID", width: 220},
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    {field: "email", headerName: "Email", width: 200},
    {field: "isAdmin", headerName: "Admin", width: 200},
    {field: "password", headerName: "Password", width: 200},
    {field: "createdAt", headerName: "Created At", width: 200},
    {field: "updatedAt", headerName: "Updated At", width: 200},
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const formattedUsers =
    users?.map((user) => ({
      id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    })) || [];

  return (
    <div className="userList">
      <DataGrid
        rows={formattedUsers}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
