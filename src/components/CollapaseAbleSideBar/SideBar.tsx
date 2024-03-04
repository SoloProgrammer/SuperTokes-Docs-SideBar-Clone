import { IoIosArrowForward } from "react-icons/io";
import { useSideBarData } from "../../context/SideBarProvider";
import styles from "./Sidebar.module.css";
import { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMenuList, Tab } from "../../types/types";

const SideBar = () => {
  const { getMenuItems } = useSideBarData();
  const menuItems = getMenuItems("root");

  return (
    <aside className={styles.container}>
      <div className={styles.box}>
        <button>Start here</button>
        <div className={styles.items}>
          <p>
            <span>Introduction & Architecture</span>
          </p>
          <p>
            <span>Quick setup with pre built ui</span>
            <span className={styles.icon}>
              <IoIosArrowForward />
            </span>
          </p>
          <p>
            <span>using your own ui / custom ui</span>
            <span className={styles.icon}>
              <IoIosArrowForward />
            </span>
          </p>
        </div>
      </div>
      <div className={styles.menu}>
        <MenuList data-depth={1} menuItems={menuItems} key={"625"} />
      </div>
    </aside>
  );
};

const MenuList = ({ menuItems, "data-depth": dataDepth }: IMenuList) => {
  return (
    <ul
      className={`${styles.menuList} ${
        dataDepth > 1 ? styles.childrensList : ""
      }`}
    >
      {menuItems?.map((item) => (
        <MenuItem data-depth={dataDepth} key={item.id} item={item} />
      ))}
    </ul>
  );
};

const MenuItem = ({
  item,
  "data-depth": dataDepth,
}: {
  item: Tab;
  ["data-depth"]: number;
}) => {
  const { id, name, isChildren, slug, icon, icons } = item;
  const { getMenuItems } = useSideBarData();
  function hasChildrens() {
    return getMenuItems(id)?.length > 0;
  }
  const navigate = useNavigate();

  const handleListItemCLick = () => {
    if (getMenuItems(id)) {
      setIsOpen(!isOpen);
    }

    if (!hasChildrens()) {
      navigate(`/${slug}`);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onClick={(e) => {
        e.stopPropagation();
        handleListItemCLick();
      }}
      className={`${styles.menuItem} ${isChildren ? styles.children : ""}`}
    >
      <div
        style={
          {
            "--pLeft": isChildren ? 10 * dataDepth : 0,
          } as CSSProperties
        }
        className={`${styles.menuContent} ${isChildren ? styles.children : ""}`}
      >
        <div className={styles.content}>
          <span className={styles.withIcon}>
            {name}
            {icon && <img src={icon} alt={name} width={18} />}
            {icons?.length && (
              <>
                {icons.map((icon) => (
                  <img src={icon.src} alt="" width={icon.w} />
                ))}
              </>
            )}
          </span>
          {hasChildrens() && (
            <span className={`${styles.icon} ${isOpen ? styles.active : ""}`}>
              <span className={styles.icon}>
                <IoIosArrowForward />
              </span>
            </span>
          )}
        </div>
      </div>
      <div
        className={`${styles.nestedListWrapper} ${
          !isOpen ? styles.collapsed : ""
        }`}
      >
        <div className={styles.childrens}>
          {hasChildrens() && (
            <MenuList
              key={new Date().getTime()}
              data-depth={dataDepth + 1}
              menuItems={getMenuItems(id)}
            />
          )}
        </div>
      </div>
    </li>
  );
};

export default SideBar;
