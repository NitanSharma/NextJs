import { comments } from "../data";

// dynamic routes handlers
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
    const {id} = await params;
    // find comment on array of object
    const comment = comments.find((comment) => comment.id === parseInt(id));
    return Response.json(comment);
}

// patch route
export async function PATCH(
    request: Request,
  { params }: { params: Promise<{ id: string }> }
){
    const {id} = await params;
    const body = await request.json();
    const {text} = body;

    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    comments[index].text = text;
    return Response.json(comments[index]);
}

// delete route
export async function DELETE(
     _request: Request,
  { params }: { params: Promise<{ id: string }> }
){
    const {id} = await params;
    const index = comments.findIndex((comment) => comment.id === parseInt(id));
    const deletedComment = comments[index];
    comments.splice(index,1);
    return Response.json(deletedComment);
}
