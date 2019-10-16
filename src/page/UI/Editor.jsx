import React, { Component } from 'react';
import { Card } from 'antd';
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/index.css'

class Editor extends Component {
    render() {
        const editorProps = {
            height: 500,
            contentFormat: 'html',
            initialContent: '<p>Hello World!</p>',
        }
        return (
            <Card>
                <div className="Editor-demo">
                    <BraftEditor {...editorProps} />
                </div>
            </Card>
        )
    }
}

export default Editor;
