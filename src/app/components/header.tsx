"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MediacarLogo from "../assets/svgs/logo_mediacar.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 flex items-center justify-around w-full py-4 px-10">
      <Button
        variant="text"
        color="inherit"
        endIcon={<ExpandMoreIcon />}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose;
            router.push("/contato");
          }}
        >
          Contato
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose;
            router.push("/motorista");
          }}
        >
          Motorista
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose;
            router.push("/anunciantes");
          }}
        >
          Anunciante
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose;
            router.push("/demonstracao");
          }}
        >
          Demonstração
        </MenuItem>
      </Menu>
      <Link href={"/"}>
        <Image src={MediacarLogo} alt={"Logo mediacar"} width={150} />
      </Link>
      <span className="invisible">menu</span>
    </header>
  );
}
