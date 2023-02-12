// I'm lazy lol
const examplePhotoResponse = {
  id: "zlVzZ6KWP9Q",
  created_at: "2023-02-11T11:09:23Z",
  updated_at: "2023-02-12T19:00:01Z",
  promoted_at: "2023-02-12T19:00:01Z",
  width: 6000,
  height: 4000,
  color: "#260c0c",
  blur_hash: "L55$3WuLQVzWJ*kVwdnQD7idO=P9",
  description: null,
  alt_description: "a dj mixing in front of a crowd of people",
  urls: {
    raw: "https://images.unsplash.com/photo-1676113462035-e4d56ce608d1?ixid=Mnw0MDM3NDB8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NjIyODU1OQ&ixlib=rb-4.0.3",
    full: "https://images.unsplash.com/photo-1676113462035-e4d56ce608d1?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MDM3NDB8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NjIyODU1OQ&ixlib=rb-4.0.3&q=80",
    regular:
      "https://images.unsplash.com/photo-1676113462035-e4d56ce608d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDM3NDB8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NjIyODU1OQ&ixlib=rb-4.0.3&q=80&w=1080",
    small:
      "https://images.unsplash.com/photo-1676113462035-e4d56ce608d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDM3NDB8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NjIyODU1OQ&ixlib=rb-4.0.3&q=80&w=400",
    thumb:
      "https://images.unsplash.com/photo-1676113462035-e4d56ce608d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDM3NDB8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NjIyODU1OQ&ixlib=rb-4.0.3&q=80&w=200",
    small_s3:
      "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1676113462035-e4d56ce608d1",
  },
  links: {
    self: "https://api.unsplash.com/photos/zlVzZ6KWP9Q",
    html: "https://unsplash.com/photos/zlVzZ6KWP9Q",
    download:
      "https://unsplash.com/photos/zlVzZ6KWP9Q/download?ixid=Mnw0MDM3NDB8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NjIyODU1OQ",
    download_location:
      "https://api.unsplash.com/photos/zlVzZ6KWP9Q/download?ixid=Mnw0MDM3NDB8MHwxfGFsbHwyfHx8fHx8Mnx8MTY3NjIyODU1OQ",
  },
  likes: 0,
  liked_by_user: false,
  current_user_collections: [],
  sponsorship: null,
  topic_submissions: {},
  user: {
    id: "AEzpB87cGjo",
    updated_at: "2023-02-12T19:02:28Z",
    username: "kajtek",
    name: "Kajetan Sumila",
    first_name: "Kajetan",
    last_name: "Sumila",
    twitter_username: "Keines_",
    portfolio_url: "http://kajtek.ch",
    bio: "stop, take the shot\r\n",
    location: "Switzerland",
    links: {
      self: "https://api.unsplash.com/users/kajtek",
      html: "https://unsplash.com/@kajtek",
      photos: "https://api.unsplash.com/users/kajtek/photos",
      likes: "https://api.unsplash.com/users/kajtek/likes",
      portfolio: "https://api.unsplash.com/users/kajtek/portfolio",
      following: "https://api.unsplash.com/users/kajtek/following",
      followers: "https://api.unsplash.com/users/kajtek/followers",
    },
    profile_image: {
      small:
        "https://images.unsplash.com/profile-1649331458065-4daa9e8cff76image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
      medium:
        "https://images.unsplash.com/profile-1649331458065-4daa9e8cff76image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
      large:
        "https://images.unsplash.com/profile-1649331458065-4daa9e8cff76image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128",
    },
    instagram_username: "kajetan_sumila",
    total_collections: 0,
    total_likes: 5,
    total_photos: 936,
    accepted_tos: true,
    for_hire: true,
    social: {
      instagram_username: "kajetan_sumila",
      portfolio_url: "http://kajtek.ch",
      twitter_username: "Keines_",
      paypal_email: null,
    },
  },
};

export type PhotosResponse = (typeof examplePhotoResponse)[];
