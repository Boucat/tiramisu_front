import local_styles from './Toolbar.module.scss'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
export const ToolBar = (): JSX.Element => {
    return (
      <div className={local_styles.toolBarContainer}>
        Tiramisu.cat
      </div>
    )
  }
  
