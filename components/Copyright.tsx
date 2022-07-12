import {Typography} from "@mui/material";
import Link from 'next/link';

const Copyright = () => {
    return (
      <Typography
        variant="body2"
        className="pb-4 justify-center my-4 flex text-center w-full items-center "
      >
        {"Copyright © "}
        <Link href="https://mui.com/">
          <a className="text-blue-600 hover:underline" >Your Website</a>
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
export default Copyright;