import './Badge.less';

import React, { useContext } from 'react';
import { NavLink } from 'dumi/theme';
import { CodeContext } from '../context';
import { useCondition } from '../hooks';

export default ({ label, name, api = 'api', extend }) => {
  const { linkMap } = useContext(CodeContext);
  const linkItem = linkMap[name];
  let content = <></>;
  if (linkItem) {
    content = <NavLink to={`${linkItem.path}#${api}`}>{label}</NavLink>;
  }

  const isCN = useCondition('isCN');
  console.log('??', extend);
  if (extend) {
    content = (
      <span>
        {isCN ? '继承自' : 'extends'} {content}
      </span>
    );
  }
  return content;
};
