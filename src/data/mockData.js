export const seriesList = [
  {
    id: 'series-001',
    creatorId: 'slowspurt',
    title: '26살 대학교 입시 도전기',
    creator: '느린스퍼트',
    description: '늦은 재도전, 그리고 실패에 대한 이야기.',
    thumbnailUrl: 'https://img.youtube.com/vi/HzFB_j4yuik/hqdefault.jpg',
    totalVideos: 4,
    totalViews: '1.5k',
    genre: 'vlog',
    tags: ['입시', '대학', '면접'],
    videos: [
      {
        id: 'HzFB_j4yuik',
        title: '[1화] 대학가려고 수학에 정석 풀어본 후기',
        description: '대학가려고 수학에 정석 풀어본 후기',
        duration: '5:12',
        order: 1
      },
      {
        id: 'fb9S3--ggis',
        title: '[2화] 26살에 대학교 입학 준비하려는 이유',
        description: '26살에 대학교 입학 준비하려는 이유',
        duration: '14:56',
        order: 2
      },
      {
        id: 'bOWQtuXn5Hc',
        title: '[3화] 26살에 대학교 면접 준비중 드는 생각들',
        description: '26살에 대학교 면접 준비중 드는 생각들',
        duration: '3:29',
        order: 3
      },
      {
        id: 'TZLwatwlltw',
        title: '[4화] 26살에 대학교 입시 도전하기, 여기서 마칩니다.',
        description: '26살에 대학교 입시 도전하기, 여기서 마칩니다.',
        duration: '40:46',
        order: 4
      }
    ]
  },
  {
    id: 'series-002',
    creatorId: 'slowspurt',
    title: '수건 Talk',
    creator: '느린스퍼트',
    description: '수건 개면서 일상적인 대화하기',
    thumbnailUrl: 'https://i.ytimg.com/vi/AK35ZLD_9hI/hqdefault.jpg',
    totalVideos: 3,
    totalViews: '113',
    genre: 'talk',
    tags: ['일상', '토크', '수건'],
    videos: [
      {
        id: 'qHY1IUiQ7sI',
        title: '[1화] 일상적인일의 소중함에 대해',
        description: '일상적인 일의 소중함에 대해',
        duration: '6:41',
        order: 1
      },
      {
        id: '08iu6jDbBjo',
        title: '[2화] 미루면서 생산성을 만드는 방법',
        description: '미루면서 생산성을 만드는 방법',
        duration: '6:03',
        order: 2
      },
      {
        id: 'AK35ZLD_9hI',
        title: '[3화] 돌아온 목으로 수다 떨기',
        description: ' 돌아온 목으로 수다 떨기',
        duration: '15:57',
        order: 3
      }
    ]
  }
];

export const creatorProfiles = {
  'slowspurt': {
    name: '느린스퍼트',
    handle: 'slowspurt',
    avatarUrl: 'https://yt3.ggpht.com/iQEfIYNBUJ-XOtGtBYdwOG6jiLaQZnCxq3HRnGu6PiHsm1iRsdx-8jc0OD_jbb3LvIz49yuv=s88-c-k-c0x00ffffff-no-rj',
    bio: '느려보여도 꾸준히 나아가다보면, 달려야 할 때가 옵니다.',
    stats: {
      totalViews: '1.6k',
      subscribers: '150',
      totalSeries: 2
    },
    sections: [
      { title: 'All Series', type: 'all' },
      { title: 'Talk Series', type: 'genre', value: 'talk' }
    ]
  }
};

export const getCreatorProfile = (creatorId) => creatorProfiles[creatorId];

export const getSeriesByCreatorId = (creatorId) => {
  return seriesList.filter(series => series.creatorId === creatorId);
};

export const getAllSeries = () => seriesList;

export const getSeriesById = (seriesId) => {
  return seriesList.find(series => series.id === seriesId);
};

export const getSeriesByVideoId = (videoId) => {
  return seriesList.find(series => series.videos.some(video => video.id === videoId));
};

// Legacy support for existing components temporarily
export const mockSeries = seriesList[0];
