export interface ContentDTO {
  id: number
  videoTitle: string
  videoUrl: string
  comment: string
  rating: number
  thumbnailUrl: string
  creatorName: string
  creatorUrl: string
  createdAt: string
  postedBy: UserDTO
  updatedAt: string
}

export interface ContentsDTO {
  data: ContentDTO[]
}

export interface CreateContentDTO {
  videoUrl: string
  comment: string
  rating: number
}

export interface UserDTO {
  id: number
  username: string
  name: string
  registeredAt: string
}

export interface LoginDTO {
  username: string
  password: string
}

export interface CredentialDTO {
  accessToken: string
}
