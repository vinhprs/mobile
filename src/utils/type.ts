/* eslint-disable no-var */
export var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  ['blockquote', 'code-block', 'image'],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [{ direction: 'rtl' }], // text direction
  [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['link', 'image', 'formula'],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ['clean'], // remove formatting button
];
export var buttonList = [
  ['undo', 'redo'],
  [
    ':p-More Paragraph-default.more_paragraph',
    'font',
    'fontSize',
    'formatBlock',
    'paragraphStyle',
    'blockquote',
  ],
  ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
  ['fontColor', 'hiliteColor', 'textStyle'],
  ['removeFormat'],
  ['outdent', 'indent'],
  ['align', 'horizontalRule', 'list', 'lineHeight'],
  [
    '-right',
    ':i-More Misc-default.more_vertical',
    'fullScreen',
    'showBlocks',
    'codeView',
    'preview',
    'print',
    'save',
    'template',
  ],
  ['-right', ':r-More Rich-default.more_plus', 'table', 'math', 'imageGallery'],
  ['-right', 'image', 'video', 'audio', 'link'],
];
interface Lecture {
  lectureName: string;
  lectureType: string;
  amount: string;
  url: string;
  examId?: number;
  slug:string;
}
interface Section {
  sectionName: string;
  lectures: Array<Lecture>;
}
interface Course {
  courseName: string;
  description: string;
  price: number;
  expiredDate: string;
  thumbnail_url: string;
  categoryId: string;
  subCategoryId: string;
  sections: Array<Section>;
}
export interface stateProps {
  index: number;
  tabCourse: Array<number>;
  course: Course;
  status:object
}
export const Events = {
  CONNECT: 'connect',
  HISTORY: 'history',
  MESSAGE: 'message',
  REACTION: 'reaction',
  SUBSCRIBE: 'join_room',
  ON_REACTION: 'on_reaction',
  SEND_MESSAGE:'send_message',
  RESPONSE_MESSAGE:'response_message'
};
export interface messChatProps {
  inputChat:string
}