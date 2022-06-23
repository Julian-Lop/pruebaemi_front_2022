import '../scss/components/Comments.scss'
import Comment from './Comment'


export default function Comments({publication,comments}){


    let filteredComments =  comments && comments.length>0?  comments.filter(comment => comment.idPost === publication.id) : null

    return (
        <div className="Comments">
            <hr className='Division'></hr>
            <div className='CommentsContainer'>
                { filteredComments && filteredComments.length>0?filteredComments.map(comment => (
                    <Comment comment={comment}/>
                )):null}
            </div>
            <hr className='Division'></hr>
        </div>
    )
}