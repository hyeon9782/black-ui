import { ComponentType } from "react";
import { ListVariants, list } from "./List.css";
type ListProps<ItemType, ComponentProps> = ListVariants & {
  component: ComponentType<ComponentProps>;
  listData: ItemType[];
  mapComponentProps: (item: ItemType) => ComponentProps;
};
const List = <ItemType extends {}, ComponentProps extends {}>({
  component: Component,
  listData,
  space,
  direction,
  mapComponentProps,
  ...props
}: ListProps<ItemType, ComponentProps>) => {
  return (
    <div className={list({ space, direction })} {...props}>
      {listData.map((item, index) => (
        <Component key={index} {...mapComponentProps(item)} />
      ))}
    </div>
  );
};

export default List;
