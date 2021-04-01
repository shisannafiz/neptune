import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import StarIcon from '@material-ui/icons/Star';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PublicIcon from '@material-ui/icons/Public';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import SchoolIcon from '@material-ui/icons/School';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={HomeIcon} />
      <SidebarRow title="Top 10 Today" Icon={WhatshotIcon} />
      <SidebarRow title="NepTune Originals" Icon={StarIcon} selected />
      <SidebarRow title="New Releases" Icon={NewReleasesIcon} />
      {/* <SidebarRow title="TV Shows" />
      <SidebarRow title="Movies" /> */}
      <SidebarRow title="Continue Watching" Icon={SubscriptionsIcon} />
      <SidebarRow title="My List" Icon={BookmarkIcon} />
      <hr />
      <h2 className="sidebar__section">MOVIES</h2>
      <SidebarRow title="Romance Movies" Icon={FavoriteIcon} />
      <SidebarRow title="Comedy Movies " Icon={EmojiEmotionsIcon} />
      <SidebarRow title="Action Movies" Icon={DriveEtaIcon} />
      <SidebarRow title="Horror Movies" Icon={Brightness3Icon} />
      <SidebarRow title="Documentaries" Icon={EmojiObjectsIcon} />
      <SidebarRow title="Show More" Icon={KeyboardArrowDownIcon} />
      <hr />
      <h2 className="sidebar__section">TV SHOWS</h2>
      <SidebarRow title="TV Dramas" Icon={PeopleAltIcon} />
      <SidebarRow title="Educational TV" Icon={SchoolIcon} />
      <SidebarRow title="TV Thrillers" Icon={FlashOnIcon} />
      <SidebarRow title="International TV" Icon={PublicIcon} />
      <SidebarRow title="TV Talk Shows" Icon={QuestionAnswerIcon} />
      <SidebarRow title="Show More" Icon={KeyboardArrowDownIcon} />
    </div>
  );
}

export default Sidebar;
