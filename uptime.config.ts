import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'
const pageConfig: PageConfig = {
  title: "Sylumina's Status Page",
  links: [
    { link: 'https://github.com/zhongruan052', label: 'GitHub' },
  ],
  group: {
    '服务器': ['vps',
    '应用': ['Open-WebUI','API'],
  },
}
const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 60,
  monitors: [

     {
      id: 'vps',
      name: '服务器',
      method: 'GET',
      target: 'https://www.sylus-evolx.cn/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: '服务器',
      statusPageLink: 'https://www.sylus-evolx.cn/',
    },

    {
      id: 'API',
      name: 'API',
      method: 'GET',
      target: 'https://api.sylus-evolx.cn/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: 'API',
      statusPageLink: 'https://api.sylus-evolx.cn/',
    },
    {
      id: 'Open-WebUI',
      name: '主服务',
      method: 'GET',
      target: 'https://chat.sylus-evolx.cn/',
      expectedCodes: [200],
      timeout: 10000,
      tooltip: '主服务',
      statusPageLink: 'https://chat.sylus-evolx.cn/',
    },
  ],
  notification: {
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
    },
  },
}
const maintenances: MaintenanceConfig[] = [  {
    monitors: ['Open-WebUI'],
    title: '系统更新',
    body: '测试新服务，停机约4小时',
    start: '2025-07-30T20:59:00+08:00',
    end: '2025-07-30T23:59:59+08:00',
    color: 'red',
  }
]
export { pageConfig, workerConfig, maintenances }
