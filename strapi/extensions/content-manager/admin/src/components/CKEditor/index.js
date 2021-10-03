import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import React, {useState} from 'react';
const App=({ onChange, name, value })=>{
  const [ckEditor,setCkEditor]=useState(null);
  return (
            <div className="App">
                <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );

                        this.editor = editor;
                    } }
                    onError={ ( { willEditorRestart } ) => {
                        // If the editor is restarted, the toolbar element will be created once again.
                        // The `onReady` callback will be called again and the new toolbar will be added.
                        // This is why you need to remove the older toolbar.
                        if ( willEditorRestart ) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    } }
                    onChange={ ( event, editor ) => {  
                      const data = editor.getData();
                      onChange({ target: { name, value: data } }) }}
                    editor={ DecoupledEditor }
                    data="<p>Hello from CKEditor 5's decoupled editor!</p>"
                    config={{
                      ckfinder:{uploadUrl:`${strapi.backendURL}/upload`}
                    }}
                />
                </div>
        );
    }


export default App;