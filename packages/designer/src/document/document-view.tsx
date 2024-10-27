import { observer } from '@felce/lowcode-editor-core';
import classNames from 'classnames';
import { Component } from 'react';
import { BuiltinSimulatorHostView } from '../builtin-simulator';
import { IDocumentModel } from './document-model';

/**
 * @deprecated 暂时没用到
 */
@observer
export class DocumentView extends Component<{ document: IDocumentModel }> {
  render() {
    const { document } = this.props;
    const { simulatorProps } = document;
    const Simulator = document.designer.simulatorComponent || BuiltinSimulatorHostView;
    return (
      <div
        className={classNames('lc-document', {
          'lc-document-hidden': document.suspensed,
        })}
      >
        {/* 这一层将来做缩放用途 */}
        <div className="lc-simulator-shell">
          <Simulator {...simulatorProps} />
        </div>
        <DocumentInfoView document={document} />
      </div>
    );
  }
}

class DocumentInfoView extends Component<{ document: IDocumentModel }> {
  render() {
    return null;
  }
}
