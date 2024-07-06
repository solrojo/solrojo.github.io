export type LinkObject = {
  id: string;
  href: string;
  text: string;
};

export type ListsProps = {
  list: Array<LinkObject>;
  listClass?: string;
  listItemClass?: string;
  listRole?: string;
  itemRole?: string;
};

export type StatementObject = {
  enabled: boolean;
};
