function skillsMember()
{
    $db = dbConnect();
    $req = $db->query('SELECT * FROM skills_member');
    return $req;
}