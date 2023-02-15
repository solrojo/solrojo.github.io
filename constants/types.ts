export type LinkObject = {
  id: number
  href: string
  text: string
}

export type ListsProps = {
  list: Array<LinkObject>
  listClass?: string
  listItemClass?: string
  listRole?: string
  itemRole?: string
}

export type StatementLangObject = {
  title: string
  imageClass: string
  action: {
    text: string
    link: string
  }
}

export type StatementObject = {
  en: StatementLangObject
  ru: StatementLangObject
}
