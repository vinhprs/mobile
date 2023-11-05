import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const Renue = () => {
  const [menu, setMenu] = useState("Hôm nay");
  const handleSetmenu = (menu: string) => {
    setMenu(menu);
  };
  return (
    <div className="max-w-[500px] h-full w-full bg-white px-[20px] py-[16px]">
      <div>
        <Menu>
          <MenuButton
            p={0}
            bg="none"
            _hover={{ bg: "none" }}
            _active={{ bg: "none" }}
            fontSize="14px"
            color="#6E7485"
            as={Button}
            rightIcon={<MdOutlineKeyboardArrowDown />}
          >
            {menu}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleSetmenu("Hôm nay")}>
              Hôm nay
            </MenuItem>
            <MenuItem onClick={() => handleSetmenu("Hôm qua")}>
              Hôm qua
            </MenuItem>
            <MenuItem onClick={() => handleSetmenu("Hôm kia")}>
              Hôm kia
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <Bar options={options} data={data} className="h-full" />
    </div>
  );
};

export default Renue;
