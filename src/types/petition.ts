export interface PetitionSignature {
  id: number
  displayName: string
  message?: string | null
  createdAt: Date | string
}

export interface PaginationInfo {
  page: number
  limit: number
  totalCount: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface SignaturesResponse {
  signatures: PetitionSignature[]
  pagination: PaginationInfo
}

export interface SignatureCardProps {
  signature: PetitionSignature
  index: number
  onCommentClick?: (signature: PetitionSignature) => void
}

export interface SignatureMosaicProps {
  initialSignatures?: PetitionSignature[]
  className?: string
}