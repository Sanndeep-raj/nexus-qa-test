import {BookIcon} from '@sanity/icons'
import {ListItemBuilder} from 'sanity/structure';
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Case Study Details')
    .icon(BookIcon)
    .schemaType('caseStudyDetails')
    .child(S.documentTypeList('caseStudyDetails'))
)