import { Button } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import SunEditor from 'suneditor-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { buttonList } from '../../../utils/type';
const CheckBlog = () => {
  /**
   * @type {React.MutableRefObject<SunEditor>} get type definitions for editor
   */
  const editor: any = useRef();
  const [valuesDesc, setValuesDesc] = useState('');
  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };
  return (
    <form className='mt-[20px]'>
      <h1 className='text-[18px] font-semibold mb-[10px]'>Lý do không được kiểm duyệt</h1>
      <div className='mb-[10px]'>
        <SunEditor
          setOptions={{
            katex:katex,
            buttonList: buttonList,
          }}
          defaultValue={valuesDesc}
          //   onChange={handleChangeTitle}
          getSunEditorInstance={getSunEditorInstance}
          height="150px"
          width="100%"
        />
      </div>
      <Button
        bg="#ef4444"
        color="#ffffff"
        fontSize="14px"
        _hover={{
          bg: '#ef4445',
        }}
      >Đăng</Button>
    </form>
  );
};

export default CheckBlog;