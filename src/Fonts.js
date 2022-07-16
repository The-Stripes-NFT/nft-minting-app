import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowCircleLeft,
    faHome,
    faCheck,
    faTimes,
    faTimesCircle,
    faList,
    faCheckCircle,
    faEdit,
    faEye,
    faPlus,
    faMinus,
    faMinusCircle,
    faShoppingCart,
    faUser,
    faCartPlus,
    faTags,
    faCertificate,
    faMoneyBill,
    faLocationArrow,
    faUserAlt,
    faBookmark,
    faBookOpen,
    faUsersCog,
    faUserFriends,
    faArrowRight,
    faLockOpen,
    faLock,
    faSave,
    faTrashAlt,
    faArrowDown,
    faArrowUp,
    faInfo,
    faInfoCircle,
    faDisease,
    faSignOutAlt,
    faFileArchive,
    faDollarSign,
    faPrint,
    faFile,
    faDownload,
    faDiamond,
    faDiamondTurnRight,
    
} from "@fortawesome/free-solid-svg-icons";


const icons = {
    faDownload: faDownload,
    faFile: faFile,
    faPrint: faPrint,
    faFileArchive: faFileArchive,
    faSignOutAlt: faSignOutAlt,
    faInfoCircle: faInfoCircle,
    faInfo: faInfo,
    faArrowDown: faArrowDown,
    faArrowUp: faArrowUp,
    faTrashAlt: faTrashAlt,
    faSave: faSave,
    faLock: faLock,
    faLockOpen: faLockOpen,
    faArrowRight: faArrowRight,
    faHome: faHome,
    faCheck: faCheck,
    faArrowCircleLeft: faArrowCircleLeft,
    faTimes: faTimes,
    faTimesCircle: faTimesCircle,
    faList: faList,
    faCheckCircle: faCheckCircle,
    faEdit: faEdit,
    faEye: faEye,
    faPlus: faPlus,
    faMinus: faMinus,
    faMinusCircle: faMinusCircle,
    faShoppingCart: faShoppingCart,
    faCartPlus: faCartPlus,
    faUser: faUser,
    faTags: faTags,
    faCertificate: faCertificate,
    faMoneyBill: faMoneyBill,
    faLocationArrow: faLocationArrow,
    faUserAlt: faUserAlt,
    faBookmark: faBookmark,
    faBookOpen: faBookOpen,
    faList: faList,
    faUsersCog: faUsersCog,
    faUserFriends: faUserFriends,
    faDisease: faDisease,
    faDollarSign: faDollarSign,
    faDiamond: faDiamond,
    faDiamondTurnRight:faDiamondTurnRight

}

const FontAwesomes = (props) => {
    const { icon, ...restofProps } = props;
    const style = {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginRight: 3
    }

    return <FontAwesomeIcon
        style={{ ...style, ...props.style }}
        icon={icons[icon]}
        {...restofProps}
    />
}

export default FontAwesomes;