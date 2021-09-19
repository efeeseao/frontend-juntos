import * as S from './skeleton.styles'

const Skeleton = () => {
  return (
    <S.Card>
      <S.Image>
        <S.Skeleton width="97px" height="97px" />
      </S.Image>
      <S.Row>
        <div className="title">
          <S.Skeleton width="170px" />
        </div>
        <div className="subtitle">
          <S.Skeleton width="124px" />
        </div>
        <div className="text">
          <S.Skeleton width="120px" />
        </div>
        <div className="text">
          <S.Skeleton width="120px" />
        </div>
        <div className="text">
          <S.Skeleton width="120px" />
        </div>
      </S.Row>
    </S.Card>
  )
}

export default Skeleton
